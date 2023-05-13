interface Shift {
  id: number;
  start_datetime: string;
  end_datetime: string;
  round: boolean;
  status: 'created' | 'closed' | 'active';
  extra: any;
} 

export const arrayShifts: Shift[] = [
  {
    id: 0,
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    round: false,
    status: 'closed',
    extra:{
      client: 'Carlos Perez',
      place_name: 'Lugar',
      project_name: 'SUB6390',
      address: 'Dirección',
      allocated_hours: 4,
      owner: 'Daniel Araujo Mosquera',
      phone: '3154789562',
      project: 'Ser/044447 - Edificio Agualongo',
      description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
      activity: [
        {
          id: 1,
          title: 'Actividad 1',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'to_do'
        },
        {
          id: 2,
          title: 'Actividad 2',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'done'
        }
      ]
    }
  },
  {
    id: 1,
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    round: false,
    status: 'active',
    extra:{
      client: 'Carlos Perez',
      place_name: 'Lugar',
      project_name: 'SUB6390',
      address: 'Dirección',
      allocated_hours: 4,
      owner: 'Daniel Araujo Mosquera',
      phone: '3154789562',
      project: 'Ser/044447 - Edificio Agualongo',
      description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
      activity: [
        {
          id: 1,
          title: 'Actividad 1',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'to_do'
        },
        {
          id: 2,
          title: 'Actividad 2',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'done'
        }
      ]
    }
  },
  {
    id: 2,
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    round: false,
    status: 'created',
    extra:{
      client: 'Carlos Perez',
      place_name: 'Lugar',
      project_name: 'SUB6390',
      address: 'Dirección',
      allocated_hours: 4,
      owner: 'Daniel Araujo Mosquera',
      phone: '3154789562',
      project: 'Ser/044447 - Edificio Agualongo',
      description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
      activity: [
        {
          id: 1,
          title: 'Actividad 1',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'to_do'
        },
        {
          id: 2,
          title: 'Actividad 2',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'done'
        }
      ]
    }
  },
  {
    id: 3,
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    round: false,
    status: 'created',
    extra:{
      client: 'Carlos Perez',
      place_name: 'Lugar',
      project_name: 'SUB6390',
      address: 'Dirección',
      allocated_hours: 4,
      owner: 'Daniel Araujo Mosquera',
      phone: '3154789562',
      project: 'Ser/044447 - Edificio Agualongo',
      description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
      activity: [
        {
          id: 1,
          title: 'Actividad 1',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'to_do'
        },
        {
          id: 2,
          title: 'Actividad 2',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'done'
        }
      ]
    }
  },
  {
    id: 4,
    start_datetime: '2023-05-04T08:30:00',
    end_datetime: '2023-05-04T12:30:00',
    round: false,
    status: 'created',
    extra:{
      client: 'Carlos Perez',
      place_name: 'Lugar',
      project_name: 'SUB6390',
      address: 'Dirección',
      allocated_hours: 4,
      owner: 'Daniel Araujo Mosquera',
      phone: '3154789562',
      project: 'Ser/044447 - Edificio Agualongo',
      description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
      activity: [
        {
          id: 1,
          title: 'Actividad 1',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'to_do'
        },
        {
          id: 2,
          title: 'Actividad 2',
          description: 'lñcashgfasofnkñkasfgasfopfankfasjgavsipvdlavbjasvifasvojognkñasvasvhvassvabjlasvgoasvpiasvk',
          status: 'done'
        }
      ]
    }
  },
]