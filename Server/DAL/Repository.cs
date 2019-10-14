using DomainClassses;
using EntityFrameworkDAL;
using Microsoft.EntityFrameworkCore;
using RepositoryCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        StoreContext _context;
        DbSet<TEntity> _dbSet;
 
        public Repository(StoreContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        public async Task Create(TEntity item)
        {
            await this._dbSet.AddAsync(item);
            await this._context.SaveChangesAsync();
        }

        public async Task<TEntity> FindById(int id)
        {
            return await this._dbSet.FindAsync(id);
        }

        public async Task<IEnumerable<TEntity>> GetByFilter(Func<TEntity, bool> predicate)
        {
            return (await this._dbSet.ToListAsync())
                .Where(predicate);
        }

        public async Task<IEnumerable<TEntity>> GetByFilterPaginated(Func<TEntity, bool> predicate, int page, int pageSize)
        {
            return (await this._dbSet.ToListAsync())
                .Where(predicate)
                .Skip((page - 1) * pageSize).Take(pageSize);
        }

        public async Task Remove(TEntity item)
        {
            this._dbSet.Remove(item);
            await this._context.SaveChangesAsync();
        }

        public async Task Update(TEntity item)
        {
            this._context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
