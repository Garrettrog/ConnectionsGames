import { supabase } from '../../backend/supabase/supabaseClient';

useEffect(() => {
  const fetchData = async () => {
    const { data, error } = await supabase.from('your_table').select('*');
    console.log(data, error);
  };
  fetchData();
}, []);

