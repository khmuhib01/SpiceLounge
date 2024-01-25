import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import ScrollableTabString from 'react-native-scrollable-tabstring';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const tabNames = [
  {
    title: 'Tab 1',
    index: 0,
    isParent: true,
  },
  {
    title: 'Tab 2',
    index: 1,
    isParent: true,
  },
  {
    title: 'Tab 3',
    index: 2,
    isParent: true,
  },
  {
    title: 'Tab 4',
    index: 3,
    isParent: true,
  },
  {
    title: 'Tab 5',
    index: 4,
    isParent: true,
  },
  {
    title: 'Tab 6',
    index: 5,
    isParent: true,
  },
];

const dataSections = [
  {
    name: 'Section 1',
    index: 0,
    data: [
      {
        id: '0',
        name: 'Section 1 - 1',
      },
      {
        id: '1',
        name: 'Section 1 - 2',
      },
      {
        id: '2',
        name: 'Section 1 - 3',
      },
      {
        id: '3',
        name: 'Section 1 - 4',
      },
      {
        id: '4',
        name: 'Section 1 - 5',
      },
    ],
  },
  {
    name: 'Section 2',
    index: 0,
    data: [
      {
        id: '5',
        name: 'Section 2 - 1',
      },
      {
        id: '6',
        name: 'Section 2 - 2',
      },
      {
        id: '7',
        name: 'Section 2 - 3',
      },
      {
        id: '8',
        name: 'Section 2 - 4',
      },
      {
        id: '9',
        name: 'Section 2 - 5',
      },
    ],
  },
  {
    name: 'Section 3',
    index: 1,
    data: [
      {
        id: '10',
        name: 'Section 3 - 1',
      },
      {
        id: '11',
        name: 'Section 3 - 2',
      },
      {
        id: '12',
        name: 'Section 3 - 3',
      },
      {
        id: '13',
        name: 'Section 3 - 4',
      },
      {
        id: '14',
        name: 'Section 3 - 5',
      },
    ],
  },
  {
    name: 'Section 4',
    index: 1,
    data: [
      {
        id: '15',
        name: 'Section 4 - 1',
      },
      {
        id: '16',
        name: 'Section 4 - 2',
      },
      {
        id: '17',
        name: 'Section 4 - 3',
      },
      {
        id: '18',
        name: 'Section 4 - 4',
      },
      {
        id: '19',
        name: 'Section 4 - 5',
      },
    ],
  },
  {
    name: 'Section 5',
    index: 2,
    data: [
      {
        id: '20',
        name: 'Section 5 - 1',
      },
      {
        id: '21',
        name: 'Section 5 - 2',
      },
      {
        id: '22',
        name: 'Section 5 - 3',
      },
      {
        id: '23',
        name: 'Section 5 - 4',
      },
      {
        id: '24',
        name: 'Section 5 - 5',
      },
    ],
  },
  {
    name: 'Section 6',
    index: 2,
    data: [
      {
        id: '25',
        name: 'Section 6 - 1',
      },
      {
        id: '26',
        name: 'Section 6 - 2',
      },
      {
        id: '27',
        name: 'Section 6 - 3',
      },
      {
        id: '28',
        name: 'Section 6 - 4',
      },
      {
        id: '29',
        name: 'Section 6 - 5',
      },
    ],
  },
  {
    name: 'Section 7',
    index: 3,
    data: [
      {
        id: '30',
        name: 'Section 7 - 1',
      },
      {
        id: '31',
        name: 'Section 7 - 2',
      },
      {
        id: '32',
        name: 'Section 7 - 3',
      },
      {
        id: '33',
        name: 'Section 7 - 4',
      },
      {
        id: '34',
        name: 'Section 7 - 5',
      },
    ],
  },
  {
    name: 'Section 8',
    index: 4,
    data: [
      {
        id: '35',
        name: 'Section 8 - 1',
      },
      {
        id: '36',
        name: 'Section 8 - 2',
      },
      {
        id: '37',
        name: 'Section 8 - 3',
      },
      {
        id: '38',
        name: 'Section 8 - 4',
      },
      {
        id: '39',
        name: 'Section 8 - 5',
      },
    ],
  },
];

// const dataMain = [
//   {
//     name: 'Section 1',
//     data: [
//       {
//         id: '0',
//         name: 'Section 1 - 1',
//       },
//       {
//         id: '1',
//         name: 'Section 1 - 2',
//       },
//       {
//         id: '2',
//         name: 'Section 1 - 3',
//       },
//       {
//         id: '3',
//         name: 'Section 1 - 4',
//       },
//       {
//         id: '4',
//         name: 'Section 1 - 5',
//       },
//     ],
//   },
//   {
//     name: 'Section 2',
//     data: [
//       {
//         id: '5',
//         name: 'Section 2 - 1',
//       },
//       {
//         id: '6',
//         name: 'Section 2 - 2',
//       },
//       {
//         id: '7',
//         name: 'Section 2 - 3',
//       },
//       {
//         id: '8',
//         name: 'Section 2 - 4',
//       },
//       {
//         id: '9',
//         name: 'Section 2 - 5',
//       },
//     ],
//   },
//   {
//     name: 'Section 3',
//     data: [
//       {
//         id: '10',
//         name: 'Section 3 - 1',
//       },
//       {
//         id: '11',
//         name: 'Section 3 - 2',
//       },
//     ],
//   },
//   {
//     name: 'Section 4',
//     data: [
//       {
//         id: '15',
//         name: 'Section 4 - 1',
//       },
//       {
//         id: '16',
//         name: 'Section 4 - 2',
//       },
//       {
//         id: '17',
//         name: 'Section 4 - 3',
//       },
//     ],
//   },
//   {
//     name: 'Section 5',
//     data: [
//       {
//         id: '18',
//         name: 'Section 5 - 1',
//       },
//       {
//         id: '19',
//         name: 'Section 5 - 2',
//       },
//       {
//         id: '20',
//         name: 'Section 5 - 3',
//       },
//       {
//         id: '21',
//         name: 'Section 5 - 2',
//       },
//       {
//         id: '22',
//         name: 'Section 5 - 3',
//       },
//     ],
//   },
//   {
//     name: 'Section 6',
//     data: [
//       {
//         id: '18',
//         name: 'Section 5 - 1',
//       },
//       {
//         id: '19',
//         name: 'Section 5 - 2',
//       },
//       {
//         id: '20',
//         name: 'Section 5 - 3',
//       },
//       {
//         id: '21',
//         name: 'Section 5 - 2',
//       },
//       {
//         id: '22',
//         name: 'Section 5 - 3',
//       },
//     ],
//   },
//   {
//     name: 'Section 7',
//     data: [
//       {
//         id: '18',
//         name: 'Section 5 - 1',
//       },
//       {
//         id: '19',
//         name: 'Section 5 - 2',
//       },
//       {
//         id: '20',
//         name: 'Section 5 - 3',
//       },
//       {
//         id: '21',
//         name: 'Section 5 - 2',
//       },
//       {
//         id: '22',
//         name: 'Section 5 - 3',
//       },
//     ],
//   },
// ];

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollableTabString
        dataTabs={tabNames}
        dataSections={dataSections}
        renderSection={item => (
          <View>
            <Text>{item.name}</Text>
            {item.data.map(i => (
              <Text key={i.id} style={{padding: 20}}>
                {i.name}
              </Text>
            ))}
          </View>
        )}
        renderTabName={item => (
          <TouchableOpacity>
            <Text style={{padding: 10}}>{item.title}</Text>
          </TouchableOpacity>
        )}
        selectedTabStyle={{
          borderColor: Colors.brown_grey,
          borderRadius: 10,
          borderWidth: 1,
          margin: 10,
        }}
        unselectedTabStyle={{
          backgroundColor: Colors.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </>
  );
}
