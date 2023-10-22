using AutoMapper;
using StudentHubBackend.Dto;
using StudentHubBackend.Exceptions;
using StudentHubBackend.Interfaces;
using StudentHubBackend.Models;
using StudentHubBackend.Repositories;

namespace StudentHubBackend.Services
{
    public class GroupService : IGroupService
    {
        private readonly GroupRepository _groupRepository;
        private readonly UserRepository _userRepository;
        private readonly UserGroupRepository _userGroupRepository;
        private readonly IMapper _mapper;

        public GroupService(
            GroupRepository groupRepository,
            UserRepository userRepository,
            UserGroupRepository userGroupRepository,
            IMapper mapper
        )
        {
            _groupRepository = groupRepository;
            _userRepository = userRepository;
            _userGroupRepository = userGroupRepository;
            _mapper = mapper;
        }

        public async Task<GroupDto> AddGroup(int userId, GroupDto groupDto)
        {
            var user = await _userRepository.GetById(userId);
            if (user == null ) { throw new UserNotFoundException(); }

            var group = _mapper.Map<Group>(groupDto);
            group.Owner = user;
            group.CreatedDate = DateTime.Now;
            group.Rating = 3;
            group.Image = groupDto.Image;
            var groupAdded = await _groupRepository.AddEntity(group);

            var userGroup = new UserGroup
            {
                Group = groupAdded,
                User = user,
            };

            await _userGroupRepository.AddEntity(userGroup);
            return _mapper.Map<GroupDto>(groupDto);
        }

        public async Task<bool> AddMember(int groupId, int userId)
        {
            var user = await _userRepository.GetById(userId);
            if (user == null) { throw new UserNotFoundException(); }

            var group = await _groupRepository.GetById(groupId);
            if (group == null) { throw new GroupNotFoundException(); }

            var userGroup = new UserGroup
            {
                Group = group,
                User = user,
            };
            var userGroupAdded = await _userGroupRepository.AddEntity(userGroup);
            //group.UserGroup.Add(userGroupAdded);
            return userGroupAdded != null;
        }

        public async Task<GroupDto> ChangeGroupName(int groupId, string name)
        {
            var group = await _groupRepository.GetGroupById(groupId);
            if (group == null) { throw new GroupNotFoundException(); }

            group.Name = name;
            var updatedGroup = await _groupRepository.UpdateEntity(group);
            return _mapper.Map<GroupDto>(group);
        }

        public async Task<bool> DeleteGroup(int groupId)
        {
            var group = await _groupRepository.GetGroupById(groupId);
            if (group == null) { throw new GroupNotFoundException(); }

            return await _groupRepository.Delete(group);
        }

        public async Task<List<GroupDto>> GetAllGroups()
        {
            var groups = await _groupRepository.GetAll();
            return _mapper.Map<List<GroupDto>>(groups);
        }

        public async Task<GroupDto> GetGroupById(int id)
        {
            var group = await _groupRepository.GetById(id);
            return _mapper.Map<GroupDto>(group);
        }

        public async Task<List<Document>> GetGroupDocuments(int groupId)
        {
            var group = await _groupRepository.GetGroupById(groupId);
            return group.Documents.ToList();
        }

        public async Task<List<UserDto>> GetMembers(int groupId)
        {
            var group = await _groupRepository.GetGroupById(groupId);
            if (group == null) throw new GroupNotFoundException();

            var members = await _userGroupRepository.GetGroupMembers(groupId);
            return _mapper.Map<List<UserDto>>(members);
        }

        public async Task<UserDto> GetOwner(int groupId)
        {
            var group = await _groupRepository.GetGroupById(groupId);
            if (group == null) { throw new GroupNotFoundException(); }

            return _mapper.Map<UserDto>(group.Owner);
        }

        public async Task<List<GroupDto>> GetUserGroups(int userId)
        {
            var groups = await _userGroupRepository.GetUserGroups(userId);
            return _mapper.Map<List<GroupDto>>(groups);
        }

        public async Task<List<GroupDto>> SearchGroups(string search)
        {
            var groups = await _groupRepository.SearchGroups(search);
            return _mapper.Map<List<GroupDto>>(groups);
        }
    }
}
