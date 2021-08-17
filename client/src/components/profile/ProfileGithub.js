import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getGithubRepos } from '../../actions/profile'

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username)
  }, [getGithubRepos])

  return (
    <div className='profile-github'>
      <h2 className='text-theme mg-1'>
        <i class='fab fa-github'></i> Github Repos
      </h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} className='repo bg-white pd-1 mg-1'>
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className='badge'>
                  <i class='fas fa-star'></i> {repo.stargazers_count}
                </li>
                <li className='badge '>
                  <i class='fas fa-eye'></i> {repo.watchers_count}
                </li>
                <li className='badge'>
                  <i class='fas fa-code-branch'></i> {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
})

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)
