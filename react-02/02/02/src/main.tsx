import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header';
import { SidebarMenu } from './components/SidebarMenu';
import { PageTitle } from './components/PageTitle';
import { TracksList } from './components/TracksList';
import { TrackDetail } from './components/TrackDetail';
import { Footer } from './components/Footer';
// import { App } from './App.tsx'

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);
reactRoot.render(
  <MainPage />
)

function MainPage() {
  return (
    <div>
      <Header />
      <SidebarMenu />
      <PageTitle />
      <div style={{display: 'flex'}}>
        <TracksList />
        <TrackDetail />
      </div>
      <Footer />
    </div>
  )
}
