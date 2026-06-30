using AutoMapper;
using StoreApp.DTOs;
using StoreApp.Entities;

namespace StoreApp.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>();
        }
    }
}
