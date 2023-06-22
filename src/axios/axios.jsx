import { useEffect, useState } from 'react';
import { connect } from 'react-redux'

const useAxios = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        data.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        })
      }
    }
    loadData();
  }, [url]);