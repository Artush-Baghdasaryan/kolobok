

using StudentHubBackend.Dto;
using StudentHubBackend.Models;

namespace StudentHubBackend.Interfaces
{
    public interface IGroupService
    {
        Task<List<GroupDto>> GetAllGroups();
        Task<GroupDto> GetGroupById(int id);
        Task<List<GroupDto>> SearchGroups(string search);
        Task<GroupDto> AddGroup(int userId, GroupDto groupDto);
        Task<GroupDto> ChangeGroupName(int groupId, string name);
        Task<bool> DeleteGroup(int groupId);
        Task<bool> AddMember(int groupId, int userId);
        Task<UserDto> GetOwner(int groupId);
        Task<List<UserDto>> GetMembers(int groupId);
        Task<List<GroupDto>> GetUserGroups(int userId);
        Task<List<Document>> GetGroupDocuments(int groupId);
    }
}
