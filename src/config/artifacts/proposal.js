const ProposalArtifact = {
	address: {
		5: '0xacfc7725527ba2ee4311574f65e5d76f9f9585e9',
	},
	abi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'proposalId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'vote',
					type: 'uint256',
				},
			],
			name: 'VoteCasted',
			type: 'event',
		},
		{
			inputs: [],
			name: 'VOTE_FEE',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'clean',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'getVote',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'proposalId',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_vote',
					type: 'uint256',
				},
			],
			name: 'vote',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'votesForNo',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'votesForYes',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
};

export default ProposalArtifact;
