'use client'

import { Spinner } from '@/components'
import Card from '@/components/Card'
import { Callout, TextField, Toggle } from '@/components/Form'
import { createWishListSchema } from '@/schemas/wishlist'
import { axios } from '@/services/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

type WishListFormData = z.infer<typeof createWishListSchema>;

type Props = {
  wishList?: WishListFormData & { id: string };
}

const CreateWishlistPage = ({ wishList }: Props) => {
  const { control, handleSubmit } = useForm<WishListFormData>({
    resolver: zodResolver(createWishListSchema),
    defaultValues: {
      name: wishList?.name ?? undefined,
      slug: wishList?.slug ?? undefined,
      isActive: wishList?.isActive ?? true,
    },
  });
  const router = useRouter();

  const [generalError, setGeneralError] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  async function handleCreateIssue(data: WishListFormData) {
    try {
      setIsSubmitting(true);
      console.log(data);

      if (wishList) await axios.patch(`/wish-lists/${wishList.id}`, data);
      else await axios.post('/wish-lists', data);

      router.push('/issues/list');
      router.refresh();
    } catch (error) {
      setGeneralError('An unexpected error occurred.')
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className='max-w-xl mb-5'>
      {generalError && (
        <Callout.Root color='red'>
          <Callout.Text>{generalError}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(handleCreateIssue)}
        className='card-body flex flex-col gap-4 '
      >
        <Controller
          name='name'
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              placeholder='Name'
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name='slug'
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              placeholder='Slug'
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name='isActive'
          control={control}
          render={({ field: { value, onChange } }) => (
            <label className='gap-2 flex'>
              <Toggle
                checked={value}
                onChange={onChange}
              />
              Sync settings
            </label>
          )}
        />

        <button className='btn btn-primary' disabled={isSubmitting}>
          {wishList ? 'Update Wish List' : 'Submit New Wish List'}&nbsp;
          {isSubmitting && <Spinner />}
        </button>
      </form>
    </Card >
  )
}

export default CreateWishlistPage