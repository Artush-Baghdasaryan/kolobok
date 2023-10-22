using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentHubBackend.Enum;
using StudentHubBackend.Interfaces;
using StudentHubBackend.Models;
using StudentHubBackend.Services;

namespace StudentHubBackend.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class InviteController : ControllerBase
    {
        private readonly IInviteService _inviteService;

        public InviteController(IInviteService inviteService)
        {
            _inviteService = inviteService;
        }

        [HttpPost("invite-request")]
        public async Task<ActionResult<bool>> InviteRequest([FromQuery] int userSendId, [FromQuery] int userReciveId, [FromQuery] int groupId)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var invite = await _inviteService.InviteRequest(userSendId, userReciveId, groupId);
                return Ok(invite);
            }
            catch (Exception ex) { return BadRequest(ex.Message); };
        }

        [HttpPost("invite-responce")]
        public async Task<ActionResult<bool>> InviteResponce([FromQuery] int inviteId, [FromQuery] InviteStatus status)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var invite = await _inviteService.InviteResponce(inviteId, status);
                return Ok(invite);
            }
            catch (Exception ex) { return BadRequest(ex.Message); };
        }

        [HttpGet("{inviteId}")]
        public async Task<ActionResult<Invite>> GetInvite(int inviteId)
        {
            try
            {
                var invite = await _inviteService.GetInviteById(inviteId);
                if (invite == null)
                {
                    return NotFound();
                }

                return Ok(invite);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-user-invites")]
        public async Task<ActionResult<List<Invite?>>> GetUserInvites(int userId)
        {
            try
            {
                var invite = await _inviteService.GetUserInvites(userId);
                if (invite == null) return NotFound();
                return Ok(invite);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
