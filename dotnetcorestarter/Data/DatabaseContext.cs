using Microsoft.EntityFrameworkCore;
using dotnetcorestarter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using dotnetcorestarter.Models.Auth;
using Microsoft.AspNetCore.Identity;

namespace dotnetcorestarter.Data
{
    public class DatabaseContext : IdentityDbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }
    }
}
