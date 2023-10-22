using StudentHubBackend.Enum;
using StudentHubBackend.Interfaces;
using StudentHubBackend.Models;
using StudentHubBackend.Repositories;

namespace StudentHubBackend.Services
{
    public class InviteService : IInviteService
    {
        private readonly InviteRepository _inviteRepository;
        private readonly UserRepository _userRepository;
        private readonly IGroupService _groupService;
        private readonly GroupRepository _groupRepository;
        //private readonly UserGroupRepository _userGroupRepository;

        public InviteService(
            InviteRepository inviteRepository,
            UserRepository userRepository,
            UserGroupRepository userGroupRepository,
            GroupRepository groupRepository,
            IGroupService groupService)
        {
            _inviteRepository = inviteRepository;
            _userRepository = userRepository;
            //_userGroupRepository = userGroupRepository;
            _groupRepository = groupRepository;
            _groupService = groupService;
        }

        public async Task<Invite> GetInviteById(int inviteId)
        {
            var invite = await _inviteRepository.GetInviteById(inviteId);
            if (invite == null)
            {
                throw new NotImplementedException();
            }

            return invite;
        }

        public async Task<List<Invite>> GetUserInvites(int userId)
        {
            var invites = await _inviteRepository.GetUserInvites(userId);
            if (invites == null)
            {
                throw new NotImplementedException(); //поменять
            }

            return invites;
        }

        // Отправить инвайт(Создать инвайт)
        public async Task<bool> InviteRequest(int userSendId, int userReciveId, int groupId)
        {
            var group = await _groupRepository.GetGroupById(groupId);
            if (group.Owner.Id != userSendId)
            {
                throw new NotImplementedException();
            }


            var invite = new Invite();
            invite.Status = InviteStatus.Sent;
            invite.UserSent = await _userRepository.GetById(userSendId);
            invite.UserReceived = await _userRepository.GetById(userReciveId);
            invite.Group = await _groupRepository.GetGroupById(groupId);
            await _inviteRepository.AddEntity(invite);
            
            return true;
        }

        //Ответить на инвайт который мне прислали
        //если cancel то всё
        // если acsept то в репе group есть addMember добавляю пользователя
        public async Task<bool> InviteResponce(int inviteId, InviteStatus status)
        {
            var invite = await _inviteRepository.GetInviteById(inviteId);
            switch (status)
            {
                case InviteStatus.Sent:
                    return true;

                case InviteStatus.Accepted:
                    invite.Status = InviteStatus.Accepted;
                    await _inviteRepository.UpdateEntity(invite);
                    return await _groupService.AddMember(invite.Group.Id, invite.UserReceived.Id);

                case InviteStatus.Denied:
                    invite.Status = InviteStatus.Denied;
                    await _inviteRepository.UpdateEntity(invite);
                    return false;
                
                default:
                    return false;
            }
        }
    }
}
