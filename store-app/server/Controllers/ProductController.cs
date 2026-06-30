using Microsoft.AspNetCore.Mvc;
using StoreApp.DTOs;
using StoreApp.Services;

namespace StoreApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _service;
        public ProductController(IProductService service) => _service = service;

        [HttpPost("search")]
        public async Task<IActionResult> Search([FromBody] ProductSearchRequest request, CancellationToken ct)
        {
            if (!ModelState.IsValid) return ValidationProblem(ModelState);

            var (items, total) = await _service.SearchAsync(request, ct);

            var response = new
            {
                items,
                total,
                page = request.PageNumber,
                pageSize = request.PageSize,
            };

            return Ok(response);
        }
    }
}
