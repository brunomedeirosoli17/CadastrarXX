import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';

const userSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
});

type UserFormData = z.infer<typeof userSchema>;

const UserForm = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const isEdit = !!uuid;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (isEdit) {
      axios.get(`https://api-sci2-4ycuahis2a-rj.a.run.app/auth/selection/user/list/${uuid}`).then(({ data }) => {
        reset(data);
      });
    }
  }, [isEdit, uuid, reset]);

  const queryClient = useQueryClient();

  const mutation = useMutation((newUser: UserFormData) => {
    return isEdit
      ? axios.put(`https://api-sci2-4ycuahis2a-rj.a.run.app/auth/selection/user/update/${uuid}`, newUser)
      : axios.post('https://api-sci2-4ycuahis2a-rj.a.run.app/auth/selection/user/create', newUser);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      router.push('/users');
    }
  });

  const onSubmit = (data: UserFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit User' : 'Create User'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('name')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <button type="submit" className="bg-military-green text-white px-4 py-2 rounded">
          {isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
