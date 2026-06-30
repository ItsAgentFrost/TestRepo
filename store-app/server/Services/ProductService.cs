using AutoMapper;
using StoreApp.DTOs;
using StoreApp.Repositories;

namespace StoreApp.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repo;
        private readonly IMapper _mapper;
        public ProductService(IProductRepository repo, IMapper mapper) { _repo = repo; _mapper = mapper; }

        public async Task<(IEnumerable<ProductDto> Items, int TotalCount)> SearchAsync(ProductSearchRequest request, CancellationToken ct = default)
        {
            var (items, total) = await _repo.SearchAsync(request.SearchText, request.ProductType, request.PageNumber, request.PageSize, ct);
            var dtos = _mapper.Map<IEnumerable<ProductDto>>(items);
            return (dtos, total);
        }
    }
}
