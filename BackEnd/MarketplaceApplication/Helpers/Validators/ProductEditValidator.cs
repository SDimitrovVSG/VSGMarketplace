﻿using FluentValidation;
using MarketplaceApplication.Models.ProductModels.DTOs;

namespace MarketplaceApplication.Helpers.Validators
{
    public class ProductEditValidator : AbstractValidator<ProductEditModel>
    {
        public ProductEditValidator()
        {
            RuleFor(c => c.Code)
                .NotNull().WithMessage("Code can't be null!")
                .Length(1, 100);

            RuleFor(n => n.FullName)
                .NotNull().WithMessage("FullName can't be null!")
                .Length(1, 100);

            RuleFor(p => p.Price)
                .NotNull().WithMessage("Price can't be null")
                .GreaterThan(-1).WithMessage("Price must be positive number!");

            RuleFor(c => c.Quantity)
                .NotNull().WithMessage("Quantity can't be null")
                .GreaterThan(-1).WithMessage("Quantity must be positive number!");

            RuleFor(c => c.QuantityForSale)
                .GreaterThan(-1).WithMessage("QuantityForSale must be positive number!");

            RuleFor(c => c.CategoryId)
                .NotNull().WithMessage("CategoryId can't be null");
        }
    }
}
