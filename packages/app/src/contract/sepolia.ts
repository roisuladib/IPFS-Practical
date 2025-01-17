export const sepolia = {
   address: '0xEab8D8d202581263b8e3C44F553e7F11330BBB0C',
   abi: [
      {
         anonymous: false,
         inputs: [
            {
               indexed: false,
               internalType: 'uint256',
               name: 'id',
               type: 'uint256',
            },
            {
               indexed: false,
               internalType: 'string',
               name: 'content',
               type: 'string',
            },
         ],
         name: 'TaskCreated',
         type: 'event',
      },
      {
         anonymous: false,
         inputs: [
            {
               indexed: false,
               internalType: 'uint256',
               name: 'id',
               type: 'uint256',
            },
            {
               indexed: false,
               internalType: 'bool',
               name: 'completed',
               type: 'bool',
            },
         ],
         name: 'TaskToggled',
         type: 'event',
      },
      {
         inputs: [
            {
               internalType: 'string',
               name: '_content',
               type: 'string',
            },
         ],
         name: 'createTask',
         outputs: [],
         stateMutability: 'nonpayable',
         type: 'function',
      },
      {
         inputs: [],
         name: 'getTasks',
         outputs: [
            {
               components: [
                  {
                     internalType: 'uint256',
                     name: 'id',
                     type: 'uint256',
                  },
                  {
                     internalType: 'string',
                     name: 'content',
                     type: 'string',
                  },
                  {
                     internalType: 'bool',
                     name: 'completed',
                     type: 'bool',
                  },
               ],
               internalType: 'struct TodoList.Task[]',
               name: '',
               type: 'tuple[]',
            },
         ],
         stateMutability: 'view',
         type: 'function',
      },
      {
         inputs: [
            {
               internalType: 'uint256',
               name: '_id',
               type: 'uint256',
            },
         ],
         name: 'toggleCompleted',
         outputs: [],
         stateMutability: 'nonpayable',
         type: 'function',
      },
   ],
} as const;
