using System;

namespace StoreApp.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Image { get; set; }
        public string? ProductType { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
