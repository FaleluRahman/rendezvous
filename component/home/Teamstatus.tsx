import React from 'react'

function Teamstatus() {
  return (
    <div>
      <div className="progres " id="progres">
  <h6>Team Points</h6>
  <h5 className="result-count">Final Results</h5>
  <div className="team">
    <div className="team-progress team01">
      <span className="percentage">
        <span className="tt" />
      </span>
    </div>
  </div>
  <div className="team">
    <p>Irish Rovers</p>
    <div className="team-progress">
      <span className="percentage tt01">
        <span className="tt">976</span>
      </span>
    </div>
  </div>
  <div className="team">
    <p>Marrakesh Marauders</p>
    <div className="team-progress">
      <span className="percentage tt02">
        <span className="tt">988</span>
      </span>
    </div>
  </div>
  <div className="team">
    <p>Turkish Tropers</p>
    <div className="team-progress">
      <span className="percentage tt03">
        <span className="tt">935</span>
      </span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Teamstatus
