import { createTestDocument } from './common'
import { idx } from '../'

test('array of strings', async() => {
	const result = await createTestDocument('odd-models/array-of-strings-v2.yml', {
		collectionModelsAllowed: true,
	})

	const models = idx.allValues(result.models)
	const model1 = models[0]
	expect(model1.name).toEqual('ArrayOfStrings')
	expect(model1.nativeType.toString()).toEqual('ArrayOfStrings')
	expect(model1.parent).toBeUndefined()
	expect(model1.parentNativeType).not.toBeUndefined()
	expect(model1.parentNativeType?.toString()).toEqual('array string')
})

test('uuid', async() => {
	const result = await createTestDocument('odd-models/uuid-v2.yml')

	/* We don't parse the UUID type as a model */
	expect(idx.size(result.models)).toEqual(0)

	/* Note that there doesn't seem to be a way to _use_ schemas like this actually */
})
