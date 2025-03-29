// src/App.jsx Aktualisierung (nur relevant Teil gezeigt)
import Footer from './components/footer'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='min-h-screen bg-white flex flex-col'>
          <Header />

          <div className='flex-grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/top-themen' element={<TopThemen />} />
              <Route
                path='/ragle-prime'
                element={
                  <ProtectedRoute>
                    <RaglePrime />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>

          {/* Footer-Komponente am Ende */}
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
