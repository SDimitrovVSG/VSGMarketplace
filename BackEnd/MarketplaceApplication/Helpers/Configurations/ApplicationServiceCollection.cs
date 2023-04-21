﻿using FluentValidation;
using MarketplaceApplication.Helpers.Validators;
using MarketplaceApplication.Models.CategoryModels.Interfaces;
using MarketplaceApplication.Models.LocationModels.Interfaces;
using MarketplaceApplication.Models.OrderModels.DTOs;
using MarketplaceApplication.Models.OrderModels.Interfaces;
using MarketplaceApplication.Models.PictureModels.Interfaces;
using MarketplaceApplication.Models.ProductModels.DTOs;
using MarketplaceApplication.Models.ProductModels.Interfaces;
using MarketplaceApplication.Services;
using Microsoft.Extensions.DependencyInjection;

namespace MarketplaceApplication.Helpers.Configurations
{
    public static class ApplicationServiceCollection
    {
        public static IServiceCollection AddApplicationServiceCollection(this IServiceCollection services)
        {
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ILocationService, LocationService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IPictureService, PictureService>();
            services.AddScoped<IOrderService, OrderService>();

            services.AddScoped<IValidator<ProductAddModel>, ProductAddValidator>();
            services.AddScoped<IValidator<ProductEditModel>, ProductEditValidator>();
            services.AddScoped<IValidator<AddOrderModel>, AddOrderValidator>();

            return services;
        }
    }
}
