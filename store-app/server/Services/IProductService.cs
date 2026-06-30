using StoreApp.DTOs;

namespace StoreApp.Services
{
    public interface IProductService
    {
        Task<(IEnumerable<ProductDto> Items, int TotalCount)> SearchAsync(ProductSearchRequest request, CancellationToken ct = default);
    }
}
