import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createProfileAction = async (prevState: any, formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  if (firstName !== 'Invalid') return { message: 'there was an error...' }
  return { message: 'Profile Created' }
}

function CreateProfile() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
      <div className='border p-8 rounded-md max-w-lg'>
        <FormContainer action={createProfileAction}>
          <div className='grid gap-4 mt-4 '>
            <FormInput type='text' name='firstName' label='First Name' />
            <FormInput type='text' name='lastName' label='Last Name' />
            <FormInput type='text' name='username' label='Username' />
          </div>
          <SubmitButton text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  )
}
export default CreateProfile