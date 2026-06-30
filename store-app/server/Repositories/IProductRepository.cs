using StoreApp.Entities;

namespace StoreApp.Repositories
{
    public interface IProductRepository
    {
        Task<(IEnumerable<Product> Items, int TotalCount)> SearchAsync(string? searchText, string? productType, int pageNumber, int pageSize, CancellationToken ct = default);
    }
}
