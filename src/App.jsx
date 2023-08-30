import { useState } from "react";

import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

export default function App() {
  const [user, setUser] = useState('')
  const hasUser = Boolean(user)
  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {!hasUser && <Form onSubmit={setUser} />}
    </div>
  )
}
