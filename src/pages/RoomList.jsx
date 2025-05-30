import { useRooms } from '../hooks/useRooms';
import RoomList from "../components/room/roomList"

const RoomListPage = () => {
  const { rooms, loading, error, refreshRooms } = useRooms();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#034a8a]">Listado de Habitaciones</h1>
          <button
            onClick={refreshRooms}
            className="px-4 py-2 bg-[#03c9e6] text-white rounded-md shadow-sm text-sm font-medium hover:bg-[#02a8c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03c9e6]"
          >
            Refrescar
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg p-6">
          <RoomList 
            rooms={rooms} 
            loading={loading} 
            error={error}
            refreshRooms={refreshRooms}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomListPage;