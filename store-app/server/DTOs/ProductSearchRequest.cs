namespace StoreApp.DTOs
{
    public class ProductSearchRequest
    {
        public string? SearchText { get; set; }
        public string? ProductType { get; set; }
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 20;
    }
}
