using StudentHubBackend.Dto;
using StudentHubBackend.Models;

namespace StudentHubBackend.Interfaces
{
    public interface IUserService
    {
        Task<List<UserDto>> GetAllUsers();
        Task<UserDto> GetUserById(int userId);
        Task<UserLoginDto> Login(LoginDto loginDto);
        Task<bool> Registrate(RegistrationDto registrationDto);
    }
}
