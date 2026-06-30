using Microsoft.EntityFrameworkCore;
using StoreApp.Data;
using StoreApp.Entities;

namespace StoreApp.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _db;
        public ProductRepository(AppDbContext db) => _db = db;

        public async Task<(IEnumerable<Product> Items, int TotalCount)> SearchAsync(string? searchText, string? productType, int pageNumber, int pageSize, CancellationToken ct = default)
        {
            var q = _db.Products.AsQueryable();

            if (!string.IsNullOrWhiteSpace(searchText))
            {
                q = q.Where(p => EF.Functions.Like(p.Name, $"%{searchText}%"));
            }

            if (!string.IsNullOrWhiteSpace(productType))
            {
                q = q.Where(p => p.ProductType == productType);
            }

            var total = await q.CountAsync(ct);

            var items = await q
                .OrderBy(p => p.Id)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync(ct);

            return (items, total);
        }
    }
}
