import { createTestDocument } from './common'

test('array model', async() => {
	const result = await createTestDocument('collection-models/array-model-v3.yml')

	const group1 = result.groups[0]
	const op1 = group1.operations[0]

	expect(op1.returnType).toBeUndefined()
	expect(op1.queryParams?.length).toEqual(1)
	
	const queryParam1 = op1.queryParams![0]
	expect(queryParam1.name).toEqual('statuses')
	expect(queryParam1.nativeType.toString()).toEqual('array Statuses_enum')
})

test('map model', async() => {
	const result = await createTestDocument('collection-models/map-model-v3.yml')

	const group1 = result.groups[0]
	const op1 = group1.operations[0]

	expect(op1.returnType).toBeUndefined()
	expect(op1.queryParams?.length).toEqual(1)
	
	const queryParam1 = op1.queryParams![0]
	expect(queryParam1.name).toEqual('statuses')
	expect(queryParam1.nativeType.toString()).toEqual('map Statuses_model')
})