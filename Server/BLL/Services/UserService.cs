using BLL.DTO;
using BLL.Interfaces;
using BLL.Mappers;
using DomainClassses;
using RepositoryCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        private IRepository<User> userRepository;

        public UserService(IRepository<User> repository)
        {
            this.userRepository = repository;
        }

        public async Task<bool> IsLoginSuccessful(UserDTO user)
        {
            return (await this.userRepository.GetByFilter(u =>
                u.Email == user.Email && u.Password == user.Password))
                .Any();
        }

        public async Task<bool> IsRegistrationPossible(UserDTO user)
        {
            return !(await this.userRepository.GetByFilter(u =>
                u.Email == user.Email))
                .Any();
        }

        public async Task Register(UserDTO user)
        {
            await this.userRepository.Create(await UserMapper.MapSingleFromDTOtoDAL(user));
        }
    }
}
