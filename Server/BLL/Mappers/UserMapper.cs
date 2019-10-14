using BLL.DTO;
using DomainClassses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mappers
{
    public static class UserMapper
    {
        public static async Task<User> MapSingleFromDTOtoDAL(UserDTO user)
        {
            return await Task.FromResult(new User
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
