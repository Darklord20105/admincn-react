import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useSearchParams } from 'react-router-dom'

import ConnectionsCard from '@/views/pages/user-profile/connections'
import Profile from '@/views/pages/user-profile/profile'

const UserProfileTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeView = searchParams.get('view') || 'profile'

  const tabs = [
    {
      name: 'Profile',
      value: 'profile',
      content: <Profile />
    },
    {
      name: 'Connections',
      value: 'connections',
      content: <ConnectionsCard />
    }
  ]

  return (
    <div className='w-full'>
      <Tabs
        className='gap-4'
        value={activeView}
        onValueChange={value => {
          const nextParams = new URLSearchParams(searchParams)
          nextParams.set('view', value)
          setSearchParams(nextParams)
        }}
      >
        <TabsList className='max-sm:w-full'>
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default UserProfileTabs
