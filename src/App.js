import HeaderList from './HeaderList';

export default function App() {
  return (
    <div className="space-y-2">
      <header className="space-y-1">
        <h1>Hi, I'm Seth,</h1>
        <p>a choir teacher turned web developer!</p>
        <HeaderList listStyle="lg:space-x-2" itemStyle="lg:inline space-x-1" />
      </header>
      <main>
        Main body
      </main>
    </div>
  );
}