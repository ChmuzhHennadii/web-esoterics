using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IUserService
    {
        Task<bool> IsLoginSuccessful(UserDTO user);
        Task<bool> IsRegistrationPossible(UserDTO user);
        Task Register(UserDTO user);
    }
}
