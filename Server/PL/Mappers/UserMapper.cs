using BLL.DTO;
using PL.VM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PL.Mappers
{
    public static class UserMapper
    {
        public static async Task<UserDTO> MapSingleFromVMtoDTO(UserVM user)
        {
            return await Task.FromResult(new UserDTO
            {
                Id = user.Id,
                Email = user.Email,
                Password = user.Password,
                IsSuperAdmin = user.IsSuperAdmin,
                IsAdmin = user.IsAdmin,
                IsBanned = user.IsBanned
            });
        }
    }
}
