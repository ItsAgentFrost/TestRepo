using Microsoft.EntityFrameworkCore;
using StoreApp.Entities;

namespace StoreApp.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; } = null!;

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(b =>
            {
                b.HasKey(p => p.Id);
                b.Property(p => p.Name).IsRequired().HasMaxLength(250);
                b.Property(p => p.ProductType).HasMaxLength(100);
                b.HasIndex(p => p.ProductType);
            });
        }
    }
}
