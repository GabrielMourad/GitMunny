import React from 'react'

export default function Leaderboard() {
  const leaderboard = [
    { rank: 1, user: "Alice", score: 100 },
    { rank: 2, user: "Bob", score: 90 },
    { rank: 3, user: "Charlie", score: 80 },
    { rank: 4, user: "Dave", score: 70 },
    { rank: 5, user: "Eve", score: 60 },
    { rank: 6, user: "Frank", score: 50 },
    { rank: 7, user: "Grace", score: 40 },
    { rank: 8, user: "Harry", score: 30 },
    { rank: 9, user: "Ivy", score: 20 },
    { rank: 10, user: "John", score: 10 }
  ];
  
  return (
    <>
    <div className="container">
      <div className = "lboard_title">Leaderboard</div>

      <table className = "lboard">

        <tbody>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Score</th>
          </tr>

          {leaderboard.map((obj) => (
              <>
                <tr>
                  <td>{obj.rank}</td>
                  <td>{obj.user}</td>
                  <td>{obj.score}</td>

                </tr>

              </>
            ))}

          {/* <tr>
            <td>mommy</td>
            <td>mommy</td>
            <td>mommy</td>
          </tr> */}
        </tbody>
      </table>

    </div>
    </>
  )
}
