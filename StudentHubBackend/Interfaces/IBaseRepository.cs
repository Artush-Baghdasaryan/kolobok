﻿namespace StudentHubBackend.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        Task<TEntity> GetById(int id);
        List<TEntity> SearchEntity(Func<TEntity, bool> predicate);
        Task<List<TEntity>> GetAll();
        Task<bool> DoesExist(int id);
        Task<TEntity> AddEntity(TEntity entity);
        Task<TEntity> UpdateEntity(TEntity entity);
        Task<bool> Delete(TEntity entity);
        Task<bool> Save();
    }
}
