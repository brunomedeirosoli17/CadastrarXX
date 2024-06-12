import { useQuery } from 'react-query';
import axios from 'axios';
import Link from 'next/link';
import { useUserStore } from '../../store/userStore';
import UserTable from '../../components/UserTable';
import { User } from '../../types/User';

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('https://api-sci2-4ycuahis2a-rj.a.run.app/auth/selection/user/list');
  return data;
}

const UserList = () => {
  const { data, error, isLoading } = useQuery<User[]>('users', fetchUsers);
  const setUsers = useUserStore((state) => state.setUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  if (data) {
    setUsers(data);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Link href="/users/form">
        <button className="bg-military-green text-white px-4 py-2 rounded mb-4">Add User</button>
      </Link>
      <UserTable users={data || []} />
    </div>
  );
}

export default UserList;
