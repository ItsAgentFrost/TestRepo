using FluentValidation;
using StoreApp.DTOs;

namespace StoreApp.Validation
{
    public class ProductSearchRequestValidator : AbstractValidator<ProductSearchRequest>
    {
        public ProductSearchRequestValidator()
        {
            RuleFor(x => x.PageNumber).GreaterThan(0);
            RuleFor(x => x.PageSize).InclusiveBetween(1, 100);
            RuleFor(x => x.SearchText).MaximumLength(500);
        }
    }
}
