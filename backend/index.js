const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3001;

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key for secure backend ops
);

app.use(express.json());

app.post('/submit-hint', async (req, res) =>
{
    const { gameId, roundId, hint } = req.body;
    const { error } = await supabase
    .from('hints')
    .insert([{ game_id: gameId, round_id: roundId, hint }]);

    if (error) return res.status(500).json({ error });
    res.status(200).json({ message: 'Hint submitted!' });
});

app.listen(port, () =>
{
    console.log(`Backend running on http://localhost:${port}`);
});
