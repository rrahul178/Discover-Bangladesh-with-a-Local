import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// Supabase থেকে ডেটা আনে; ব্যর্থ বা খালি হলে fallback ব্যবহার করে।
export function useTable(table, fallback, { order = "sort_order", filter } = {}) {
  const [rows, setRows] = useState(fallback);
  const [loading, setLoading] = useState(Boolean(supabase));

  useEffect(() => {
    if (!supabase) return;
    let alive = true;
    (async () => {
      let q = supabase.from(table).select("*");
      if (filter) q = q.eq(filter[0], filter[1]);
      q = q.order(order, { ascending: order !== "created_at" });
      const { data, error } = await q;
      if (!alive) return;
      if (!error && data && data.length) setRows(data);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [table]);

  return { rows, loading };
}
