using StudentHubBackend.Enum;
using StudentHubBackend.Models;

namespace StudentHubBackend.Interfaces
{
    public interface IInviteService
    {
        Task<bool> InviteRequest(int userSendId, int userReciveId, int groupId); // Отправить инвайт(Создать инвайт)
        Task<bool> InviteResponce(int inviteId, InviteStatus status); //Ответить на инвайт который мне прислали
        //если cancel то всё
        // если acsept то в репе group есть addMember добавляю пользователя
        Task<List<Invite>> GetUserInvites(int userId); // Выгрузить все инвайты
        Task<Invite> GetInviteById(int inviteId); // Получить инвайт по айди
    }
}
