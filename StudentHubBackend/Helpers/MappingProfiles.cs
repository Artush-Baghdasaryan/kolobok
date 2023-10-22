using AutoMapper;
using StudentHubBackend.Dto;
using StudentHubBackend.Models;

namespace StudentHubBackend.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<GroupDto, Group>();
            CreateMap<Group, GroupDto>();
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
            CreateMap<User, RegistrationDto>();
            CreateMap<RegistrationDto, User>();
            CreateMap<Document, DocumentDto>();
            CreateMap<DocumentDto, Document>();

        }
    }
}
