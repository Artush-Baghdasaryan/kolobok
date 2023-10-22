using Azure.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentHubBackend.Dto;
using StudentHubBackend.Interfaces;
using StudentHubBackend.Models;
using System.Runtime.CompilerServices;

namespace StudentHubBackend.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class GroupController : ControllerBase
    {
        private readonly IGroupService _groupService;

        public GroupController(IGroupService groupService)
        {
            _groupService = groupService;
        }

        [HttpGet("get-all")]
        public async Task<ActionResult<List<GroupDto>>> GetAll()
        {
            try
            {
                var groups = await _groupService.GetAllGroups();
                return Ok(groups);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{groupId}")]
        public async Task<ActionResult<GroupDto>> GetById(int groupId)
        {
            try
            {
                var group = await _groupService.GetGroupById(groupId);
                return Ok(group);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{groupId}/get-documents")]
        public async Task<ActionResult<List<Document>>> GetGroupDocuments(int groupId)
        {
            try
            {
                var documents = await _groupService.GetGroupDocuments(groupId);
                return Ok(documents);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{groupId}/get-members")]
        public async Task<ActionResult<List<UserDto>>> GetMembers(int groupId)
        {
            try
            {
                var members = await _groupService.GetMembers(groupId);
                return Ok(members);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{userId}/get-user-groups")]
        public async Task<ActionResult<List<GroupDto>>> GetUserGroups(int userId)
        {
            try
            {
                var groups = await _groupService.GetUserGroups(userId);
                return Ok(groups);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{groupId}/get-owner")]
        public async Task<ActionResult<UserDto>> GetOwner(int groupId)
        {
            try
            {
                var owner = await _groupService.GetOwner(groupId);
                return Ok(owner);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("search-groups")]
        public async Task<ActionResult<GroupDto>> SearchGroups([FromQuery] string search)
        {
            try
            {
                var groups = await _groupService.SearchGroups(search);
                return Ok(groups);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("add-group")]
        public async Task<ActionResult<GroupDto>> AddGroup([FromQuery] int userId, [FromBody] GroupDto groupDto)
        {
            try
            {
                if(!ModelState.IsValid) { return BadRequest(ModelState); }

                var group = await _groupService.AddGroup(userId, groupDto);
                return Ok(group);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{groupId}")]
        public async Task<ActionResult<GroupDto>> UpdateName(int groupId, [FromQuery] string name)
        {
            try
            {
                var updated = await _groupService.ChangeGroupName(groupId, name);
                return Ok(updated);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{groupId}")]
        public async Task<ActionResult<bool>> DeleteGroup(int groupId)
        {
            try
            {
                var deleted = await _groupService.DeleteGroup(groupId);
                return Ok(deleted);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
