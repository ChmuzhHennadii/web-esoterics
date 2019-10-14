using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.DTO
{
    public class UserDTO
    {
        public int Id { set; get; }

        public string Email { set; get; }

        public string Password { set; get; }

        public bool IsSuperAdmin { set; get; }

        public bool IsAdmin { set; get; }

        public bool IsBanned { set; get; }
    }
}
