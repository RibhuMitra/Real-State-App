import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {

  const handleLogin = () => {};

  
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView contentContainerStyle={{ height:"100%",}}>
        <Image source={images.onboarding} className="w-full my-1 h-4/6" resizeMode="contain"/>

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to ReState</Text>

          <Text className='mt-2 text-3xl text-center font-rubik-bold text-black-300'>Let's Get Closer To {"\n"}
            <Text className='text-center text-primary-300'>Your Ideal Home</Text>
          </Text>
          

          <Text className='mt-6 text-lg text-center font-rubik text-black-200'>
            Login to Restate with Google
          </Text>

          <TouchableOpacity  className='w-full py-4 mt-5 rounded-full shadow-md bg-slate-50 shadow-zinc-500'>
            <View className='flex flex-row items-center justify-center'>
             <Image 
              source={icons.google}
              className='w-5 h-5' resizeMode='contain'
             /> 

             <Text className='ml-2 text-lg font-rubik-medium text-black-300'>Continue with Google</Text>
            </View>

          </TouchableOpacity>



        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn