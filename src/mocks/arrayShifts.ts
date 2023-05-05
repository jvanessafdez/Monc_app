interface Shift {
  id: number;
  client: string;
  start_datetime: string;
  end_datetime: string;
  place_name: string;
  project_name: string;
  address: string;
  allocated_hours: number | null;
  owner: string;
  round: boolean;
  status: 'created' | 'closed' | 'active';
  phone: string;
  project: string;
  description: string;
}

export const arrayShifts: Shift[] = [
  {
    id: 0,
    client: 'Carlos Perez',
    description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    allocated_hours: 4,
    place_name: 'Lugar',
    address: 'Dirección',
    owner: 'Daniel Araujo Mosquera',
    project: 'Ser/044447 - Edificio Agualongo',
    project_name: 'SUB6390',
    phone: '3154789562',
    round: false,
    status: 'closed'
  },
  {
    id: 1,
    client: 'Carlos Perez',
    description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    allocated_hours: null,
    place_name: 'Lugar',
    address: 'Dirección',
    owner: 'Daniel Araujo Mosquera',
    project_name: 'SUB6390',
    project: 'Ser/044447 - Edificio Agualongo',
    phone: '3154789562',
    round: false,
    status: 'active'
  },
  {
    id: 2,
    client: 'Carlos Perez',
    description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    allocated_hours: 4,
    place_name: 'Lugar',
    address: 'Dirección',
    owner: 'Daniel Araujo Mosquera',
    project: 'Ser/044447 - Edificio Agualongo',
    project_name: 'SUB6390',
    phone: '3154789562',
    round: false,
    status: 'created'
  },
  {
    id: 3,
    client: 'Carlos Perez',
    description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    allocated_hours: 4,
    owner: 'Daniel Araujo Mosquera',
    place_name: 'Lugar',
    address: 'Dirección',
    project: 'Ser/044447 - Edificio Agualongo',
    project_name: 'SUB6390',
    phone: '3154789562',
    round: false,
    status: 'created'
  },
  {
    id: 4,
    client: 'Carlos Perez',
    description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    allocated_hours: 4,
    place_name: 'Lugar',
    address: 'Dirección',
    owner: 'Daniel Araujo Mosquera',
    project: 'Ser/044447 - Edificio Agualongo',
    project_name: 'SUB6390',
    phone: '3154789562',
    round: false,
    status: 'created'
  },
]