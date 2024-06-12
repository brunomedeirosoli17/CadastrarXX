import Link from 'next/link';
import { User } from '../types/User';

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => (
          <tr key={user.uuid}>
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">
              <Link href={`/users/form?uuid=${user.uuid}`}>
                <a className="bg-military-green text-white px-4 py-2 rounded">Edit</a>
              </Link>
              <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
